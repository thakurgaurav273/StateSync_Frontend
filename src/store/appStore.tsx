import { create } from 'zustand';


interface User {
    id: string;
    name: string;
    email: string;
}

interface AppState {
    loggedInUser: User | null;
    setLoggedInUser: (user: User | null) => void;
    userSessionData?: any;
    setUserSessionData?: (data: any) => void;
}

const appStore = create<AppState>((set) => ({
    loggedInUser: null,
    setLoggedInUser: (user) => set({ loggedInUser: user }),
    userSessionData: null,
    setUserSessionData: (data) => set({ userSessionData: data }),
}));

export default appStore;