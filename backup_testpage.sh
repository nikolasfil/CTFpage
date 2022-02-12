#!/bin/bash

#git init

#git add folder index.html style.css test_file.txt
#git add folder/*
#git add $HOME/*
git add *
git commit -m 'Laptop auto pushed'
git branch -M main
#git remote add origin git@github.com:foally/TestPage.git 
git push -u origin main
