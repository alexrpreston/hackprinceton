FROM python:3.10.0

WORKDIR /app

RUN pip install --upgrade pip
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

COPY . /app

EXPOSE 8870

CMD ["uvicorn", "api:app", "--reload", "--host", "0.0.0.0", "--port", "8870"]
