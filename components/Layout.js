import classNames from 'classnames';
import { getGlobalData } from '../utils/global-data';
import { useEffect } from 'react';
import Header from '../components/Header';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  // const classes = classNames(
  //   {
  //     [styles.colorBackground]: variant === 'large',
  //     [styles.colorBackgroundBottom]: variant === 'small',
  //   },
  //   className
  // );

  // return <div className={classes} />;
}


// KEEP THESE IN
export default function Layout({ children, globalData }) {
  console.log(globalData)
  // const setAppTheme = () => {
  //   const darkMode = localStorage.getItem('theme') === 'dark';
  //   const lightMode = localStorage.getItem('theme') === 'light';

  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else if (lightMode) {
  //     document.documentElement.classList.remove('dark');
  //   }
  //   return;
  // };

  // const handleSystemThemeChange = () => {
  //   var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  //   darkQuery.onchange = (e) => {
  //     if (e.matches) {
  //       document.documentElement.classList.add('dark');
  //       localStorage.setItem('theme', 'dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //       localStorage.setItem('theme', 'light');
  //     }
  //   };
  // };

  // useEffect(() => {
  //   setAppTheme();
  // }, []);

  // useEffect(() => {
  //   handleSystemThemeChange();
  // }, []);

  return (
    <div className="">
      <Header />
      <div className="">
        {children}
      </div>
    </div>
  );
}

