FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/my_crew ./my_crew

EXPOSE 8000

CMD ["uvicorn", "my_crew.api:app", "--host", "0.0.0.0", "--port", "8000"]