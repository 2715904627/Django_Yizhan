$(document).ready(function () {
    $("#projectType").on('change',
        function () {
            var projectType = $(this).val();
            $('#projectId').val('').trigger('change');

            if (projectType == '' || projectType == 'category') {
                $("#category_search_btn").toggle();
                $("#product_search_btn").toggle();
                return;
            }

            if (projectType == 'product') {
                $("#category_search_btn").toggle();
                $("#product_search_btn").toggle();
                return;
            }
        })
})