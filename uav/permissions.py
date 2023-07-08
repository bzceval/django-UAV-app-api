from rest_framework.permissions import (
    SAFE_METHODS,
    BasePermission,
)

# Staff can manage completely but others can only user view
class IsStaffOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        
        # if request.method in SAFE_METHODS:
        #     return True
        # elif (request.user.is_staff):
        #     return True
        # else:
        #     return False
        return (request.method in SAFE_METHODS or request.user.is_staff)


# Staff can fully manage, but others can only manage their own objects.
class IsStaffOrOnlyOwnerObjects(BasePermission):
    
    def has_object_permission(self, request, view, obj):
        return (
            request.user.is_staff
            or request.user.id == obj.user.id
        )