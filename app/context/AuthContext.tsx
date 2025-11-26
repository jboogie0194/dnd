import { createContext, useContext, useState } from 'react';
import type { ReactNode, ReactElement } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }): ReactElement {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize user from localStorage
    const storedUser = localStorage.getItem('user');
    return storedUser ? (JSON.parse(storedUser) as User) : null;
  });
  const isLoading = false;

  const login = async (email: string, password: string): Promise<void> => {
    // Mock authentication - in production, this would call your API
    if (password === 'password123') {
      const mockUser: User = {
        id: '1',
        email,
        firstName: email.split('@')[0],
        lastName: 'User',
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}