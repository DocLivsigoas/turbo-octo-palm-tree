import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  recoverPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    // Здесь должна быть логика для авторизации пользователя
    // Например, запрос к API для проверки учетных данных
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Здесь должна быть логика для выхода пользователя
    setIsAuthenticated(false);
  };

  const recoverPassword = async (email: string) => {
    // Здесь должна быть логика для восстановления пароля
    // Например, запрос к API для отправки письма с восстановлением пароля
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, recoverPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};