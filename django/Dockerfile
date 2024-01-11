FROM python:3.7

# Set environment variables
ENV PYTHONUNBUFFERED 1

COPY django/requirements.txt /

# Install dependencies.
RUN pip install -r /requirements.txt

# Set work directory.
RUN mkdir /code
WORKDIR /code

# Copy .env
COPY env/dj /code/.env

# Copy project code.
COPY django/ /code/

EXPOSE 8080

CMD ["uwsgi", "--http", ":8080", "--ini", "./uwsgi/uwsgi.ini"]
