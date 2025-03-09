// Sidebar Toggle Functionality
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
let sidebarOpen = true;

function toggleSidebar() {
    const isMobile = window.innerWidth < 768;
    sidebarOpen = !sidebarOpen;
    
    if (!sidebarOpen) {
        sidebar.style.transform = 'translateX(-100%)';
        mainContent.style.marginLeft = isMobile ? '0' : '0';
    } else {
        sidebar.style.transform = 'translateX(0)';
        mainContent.style.marginLeft = isMobile ? '0' : '16rem';
    }
}

// Handle resize events
window.addEventListener('resize', () => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile && !sidebarOpen) {
        toggleSidebar();
    }
});

// Active Menu Handling
function setActiveMenu() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#sidebar nav a').forEach(link => {
        link.classList.toggle('bg-blue-700/50', link.getAttribute('href') === currentPage);
    });
}

// Initialize Chart
document.addEventListener('DOMContentLoaded', function() {
    setActiveMenu();
    
    const ctx = document.getElementById('studentChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
                datasets: [{
                    label: 'Jumlah Mahasiswa',
                    data: [450, 532, 612, 578, 495, 421],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});

// Page Transitions
document.querySelectorAll('#sidebar nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = this.href;
        }, 200);
    });
});

// Initial page load animation
window.onload = () => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
};

// Fungsi untuk animasi loading
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loading.innerHTML = `
        <div class="bg-white p-4 rounded-lg shadow-lg">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
    `;
    document.body.appendChild(loading);
    return loading;
}

// Fungsi untuk smooth scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Fungsi untuk dropdown menu
function initializeDropdowns() {
    document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const dropdown = button.nextElementSibling;
            dropdown.classList.toggle('hidden');
        });
    });
}