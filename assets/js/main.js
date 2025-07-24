// 导航栏滚动效果
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-primary/95', 'shadow-md');
    navbar.classList.remove('py-4');
    navbar.classList.add('py-3');
  } else {
    navbar.classList.remove('bg-primary/95', 'shadow-md');
    navbar.classList.remove('py-3');
    navbar.classList.add('py-4');
  }
  if (window.scrollY <= 0) {
    navbar.classList.add('top-transparent');
  } else {
    navbar.classList.remove('top-transparent');
  }
});

// 初始加载时也要设置透明
if (window.scrollY <= 0) {
  navbar.classList.add('top-transparent');
} else {
  navbar.classList.remove('top-transparent');
}

// 移动端菜单切换
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const icon = menuBtn.querySelector('i');
  if (mobileMenu.classList.contains('hidden')) {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  } else {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      const icon = menuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// 返回顶部按钮
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// 加载动画界面
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.transition = 'opacity 0.6s';
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = 'none', 600);
  }, 400); // 可调整加载动画显示时长
});

// 日夜间模式切换
window.addEventListener('DOMContentLoaded', () => {
  // 加载动画界面
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.transition = 'opacity 0.6s';
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = 'none', 600);
  }, 400);

  // 日夜间切换
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    function setTheme(dark) {
      if (dark) {
        document.body.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        document.body.classList.remove('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
    themeToggle.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('dark');
      setTheme(isDark);
    });
    // 初始化主题
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (savedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }
}); 