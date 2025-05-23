<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function home()
    {
        return view('templates/header')
             . view('home')
             . view('templates/footer');
    }

    public function about()
    {
        return view('templates/header')
             . view('about')
             . view('templates/footer');
    }

    public function services()
    {
        return view('templates/header')
             . view('services')
             . view('templates/footer');
    }
}
