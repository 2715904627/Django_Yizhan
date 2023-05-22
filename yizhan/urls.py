from django.urls import path
from . import views

urlpatterns= [
    # path('update_book/<int:book_id>', views.update_book),
    # path('all_book', views.all_book),
    # path('delete_book',views.delete_book),
    path('error',views.error),
    path('corpus',views.info),
    path('',views.index_test),
    path('info',views.info_manege),
    path('type',views.type_manage_zh),
    path('type_manage_en',views.type_manage_en),
    path('type_manage_ru',views.type_manage_ruping),
    path('user_info',views.user_info),
    path('bookinfo_add',views.bookinfo_add),
    path('bookinfo_change',views.bookinfo_change),
    path('bookinfo_delete',views.delete_book),
    path('category_add',views.category_add),
    path('category_change',views.category_change),
    path('product_add',views.product_add),
    path('product_change', views.product_change),
    path('order_desc',views.order_desc),
    path('user_desc',views.user_desc),
    path('reg',views.reg_view),
    path('login',views.login_view),
    path('logout',views.logout_view),
    path('searchByInfo',views.searchByInfo),
]
