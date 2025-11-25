const Permissions = {
    OWNER: 'owner',
    ADM: 'admin',
    VIP: 'vip',
    USER: 'user',

    // Define permissions for each role
    roles: {
        [Permissions.OWNER]: {
            canManageUsers: true,
            canEditFiles: true,
            canAccessAllAreas: true,
            canBanUsers: true,
        },
        [Permissions.ADM]: {
            canManageUsers: true,
            canEditFiles: true,
            canAccessModerationArea: true,
            canBanUsers: false,
        },
        [Permissions.VIP]: {
            canAccessPremiumContent: true,
            canSendMessages: true,
            canEditOwnProfile: true,
            canManageUsers: false,
        },
        [Permissions.USER]: {
            canSendMessages: true,
            canEditOwnProfile: false,
            canAccessPremiumContent: false,
        },
    },

    // Method to check permissions
    checkPermission: function(role, permission) {
        return this.roles[role] && this.roles[role][permission] === true;
    },
};

module.exports = Permissions;