$(document).ready(function() {
    $(".navbar").addClass("navbar-show"); // أضف الناف بار عند دخول الصفحة
    var prevScrollPos = $(window).scrollTop();

    $(window).scroll(function() {
        var currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            // إذا تم التمرير لأعلى، قم بعرض الناف بار
            $(".navbar").addClass("navbar-show");
        } else {
            // إذا تم التمرير لأسفل، قم بإخفاء الناف بار إذا لم تكن في أعلى الصفحة
            if (currentScrollPos > 0) {
                $(".navbar").removeClass("navbar-show");
                
            }
        }
        prevScrollPos = currentScrollPos;
    });
});

$(document).ready(function() {
    var element = $(".ul li a");
    var targetPosition = 500; // الارتفاع بالبيكسل عندما يجب تغيير اللون

    $(window).scroll(function() {
        var currentPosition = $(window).scrollTop();
        
        if (currentPosition >= targetPosition) {
            // عندما تصل إلى الارتفاع المستهدف
            element.css("color", "#000"); // قم بتغيير اللون إلى الأسود
        } else {
            // إذا كنت أقل من الارتفاع المستهدف
            element.css("color", "#fff"); // استخدم اللون الافتراضي
        }
    });
});

// الانتظار حتى يتم تحميل محتوى DOM بالكامل قبل تشغيل السكريبت
document.addEventListener('DOMContentLoaded', () => {
    // الحصول على زر قائمة التنقل (عادةً أيقونة الهامبرغر)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    // الحصول على قائمة التنقل التي نريد تبديلها
    const navList = document.querySelector('.list ul');

    // التحقق مما إذا كانت العناصر موجودة قبل إضافة مستمع الحدث
    if (mobileMenuButton && navList) {
        // إضافة مستمع حدث 'click' إلى زر قائمة التنقل
        mobileMenuButton.addEventListener('click', () => {
            // تبديل الفئة 'active' على قائمة التنقل
            // هذه الفئة ستتحكم في إظهار أو إخفاء القائمة عبر CSS
            navList.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على أي رابط داخلها (اختياري لتحسين تجربة المستخدم)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            });
        });
    } else {
        console.warn('Mobile menu button or navigation list not found. Mobile menu functionality might not work.');
    }
});
