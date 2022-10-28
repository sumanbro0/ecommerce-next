# PLEASE MAKE SURE TO INSTALL PYTHON AND NODE BEFORE STARTING;

# ecommerce

# At first clone git repository
$ git clone https://github.com/sumanbro0/ecommerce.git

# open backend folder in ide;

# create virtual environment;
$ pip install pipenv

# activate virtual environment;
$ pipenv shell

# install required backend python modules;
$ pipenv install

# NOW FOR FRONTEND

# open frontend folder in ide (another window);
# install all required node modules;

$ yarn install

# after both completed run backend server;
$ py manage.py runserver

# run frontend server;
$ yarn dev

# admin pannel url:
$ http://127.0.0.1:8000/admin/

# admin pannel username password;
$ username: samsum
$ password: samsum
#(use same username password for login in app)

Note: There is error in frontend when you switch from home page to another page its because i have used node module to create slider . please ignore it it will be fixed soon;
