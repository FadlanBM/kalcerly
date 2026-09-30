import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}
