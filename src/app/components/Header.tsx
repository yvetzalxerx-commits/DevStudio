"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Loader } from 'lucide-react';
import { useNavigate } from 'react-router';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './ui/dialog';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/compiler');
    }, 500);
  };

  return (
    <Dialog>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/DevStudio-Logo.png" alt="DevStudio" className="w-8 h-8 object-contain object-center" />
              <span className="font-semibold text-white text-lg">DevStudio</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#handbook" className="text-slate-300 hover:text-white transition-colors">
                  Handbook
                </a>
                <a href="#code-compiler" className="text-slate-300 hover:text-white transition-colors">
                  Compiler
                </a>
                <DialogTrigger asChild>
                  <button type="button" className="text-slate-300 hover:text-white transition-colors font-normal">
                    Sign In
                  </button>
                </DialogTrigger>
              </nav>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleNavigate} disabled={isLoading}>
                {isLoading ? <Loader className="w-4 h-4 animate-spin" /> : 'Start Building Free'}
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <div
            className={`md:hidden mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3 overflow-hidden transition-all duration-300 ease-out ${
              mobileMenuOpen
                ? 'max-h-[1000px] opacity-100 scale-100'
                : 'max-h-0 opacity-0 scale-95 pointer-events-none'
            }`}
            aria-hidden={!mobileMenuOpen}
          >
            <a
              href="#features"
              className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#handbook"
              className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Handbook
            </a>
            <a
              href="#code-compiler"
              className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Compiler
            </a>
            <DialogTrigger asChild>
              <button
                type="button"
                className="w-full rounded-lg px-3 py-2 text-left text-slate-300 hover:bg-slate-900 hover:text-white transition-colors font-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </button>
            </DialogTrigger>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleNavigate} disabled={isLoading}>
              {isLoading ? <Loader className="w-4 h-4 animate-spin" /> : 'Start Building Free'}
            </Button>
          </div>
        </div>
      </header>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            This feature is not available yet. Enter your email to get notified when sign in is ready.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <label className="grid gap-2 text-sm border-slate-600">
            Email address
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white focus:border-blue-500"
            />
          </label>
        </div>
        <DialogFooter>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Notify me
          </Button>
          <DialogClose asChild>
            <Button variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
