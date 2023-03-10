<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        {{-- Icon --}}
        <link rel="shortcut icon" href="https://1.bp.blogspot.com/-vNcUzj8YRPo/YNaCWN7kmLI/AAAAAAAAFaE/Q0YIFTjsM-kDUxl8VXWNHN86WZtELt8MwCLcBGAsYHQ/s1600/Logo%2BPosyandu.png">
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" />


        {{-- <!-- tailwind CDN -->
        <script sr  c="https://cdn.tailwindcss.com"></script> --}}
        <!-- Alpine Js CDN -->
        <script defer src="https://unpkg.com/alpinejs@3.9.1/dist/cdn.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


        
        @routes
        @viteReactRefresh
        @vite('resources/css/app.css')
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased"  style="background-color: #fafafa;">
        @inertia

        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
    </body>
</html>
