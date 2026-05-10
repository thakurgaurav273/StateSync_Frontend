export const endpoints = {
    auth: {
        login: {
            url: "/api/auth/login",
            method: "POST",
        } as const,
        register: {
            url: "/api/auth/register",
            method: "POST",
        } as const,
        logout: {
            url: "/api/auth/logout",
            method: "POST",
        } as const,
        forgotPassword: {
            url: "/api/auth/forgot-password",
            method: "POST",
        } as const,
        resetPassword: {
            url: "/api/auth/reset-password",
            method: "POST",
        } as const,
    },
    users: {
        getUsers: {
            url: "/api/users",
            method: "GET",
        } as const,
        getUser: {
            url: "/api/users/:id",
            method: "GET",
        } as const,
        createUser: {
            url: "/api/users",
            method: "POST",
        } as const,
        updateUser: {
            url: "/api/users/:id",
            method: "PUT",
        } as const,
        deleteUser: {
            url: "/api/users/:id",
            method: "DELETE",
        } as const,
    },
    issues: {
        getIssues: {
            url: "/api/issues",
            method: "GET",
        } as const,
        getIssue: {
            url: "/api/issues/:id",
            method: "GET",
        } as const,
        createIssue: {
            url: "/api/issues",
            method: "POST",
        } as const,
        updateIssue: {
            url: "/api/issues/:id",
            method: "PUT",
        } as const,
        deleteIssue: {
            url: "/api/issues/:id",
            method: "DELETE",
        } as const,
    },
    projects: {
        getProjects: {
            url: "/api/projects",
            method: "GET",
        } as const,
        getProject: {
            url: "/api/projects/:id",
            method: "GET",
        } as const,
        createProject: {
            url: "/api/projects",
            method: "POST",
        } as const,
        updateProject: {
            url: "/api/projects/:id",
            method: "PUT",
        } as const,
        deleteProject: {
            url: "/api/projects/:id",
            method: "DELETE",
        } as const,
    },
    comments: {
        getComments: {
            url: "/api/comments",
            method: "GET",
        } as const,
        getComment: {
            url: "/api/comments/:id",
            method: "GET",
        } as const,
        createComment: {
            url: "/api/comments",
            method: "POST",
        } as const,
        updateComment: {
            url: "/api/comments/:id",
            method: "PUT",
        } as const,
        deleteComment: {
            url: "/api/comments/:id",
            method: "DELETE",
        } as const,
    },
};