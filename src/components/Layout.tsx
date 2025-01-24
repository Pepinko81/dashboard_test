import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Settings, Activity, Pickaxe, Boxes, CreditCard, HelpCircle, MessageSquare, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Layout() {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Dashboard', path: '/', icon: Activity },
    { name: 'Miners', path: '/miners', icon: Pickaxe },
    { name: 'Blocks', path: '/blocks', icon: Boxes },
    { name: 'Payments', path: '/payments', icon: CreditCard },
    { name: 'Connect', path: '/connect', icon: Settings },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Support', path: '/support', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="flex">
        <nav className="w-64 min-h-screen border-r border-green-800">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-8">Mining Pool</h1>
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center p-2 rounded hover:bg-green-900 ${
                      pathname === item.path ? 'bg-green-900' : ''
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <main className="flex-1 p-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-green-900"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <div className="border border-green-800 rounded-lg p-6 bg-black">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}