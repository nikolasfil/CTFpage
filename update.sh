update=$1
#echo $update

echo -e '\n\n CTFpage \n\n'
cd /d/nick/Programms/Github_Projects/NikolasProjects/CTFpage

git add  . ; git commit -m $update; git push 

echo -e '\n\n HomePage \n\n\'

cd /d/nick/Programms/Github_Projects/NikolasProjects/HomePage

git add  . ; git commit -m $update; git push 

echo -e '\n\n root \n\n'

cd /d/nick/Programms/Github_Projects/NikolasProjects/nikolasfil.github.io

git add  . ; git commit -m $update; git push 


