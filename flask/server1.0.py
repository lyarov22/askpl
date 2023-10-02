import random

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return uuid_data

# Словарь для хранения UUID
uuid_data = []

@app.route('/save_uuid', methods=['POST'])
def save_uuid():
    # Проверяем, содержит ли запрос параметр uuid
    if 'uuid' in request.form:
        uuid = request.form['uuid']
        # Сохраняем UUID в словаре
        uuid_data.append(uuid)
        return jsonify({'message': 'UUID успешно сохранен'})
    else:
        return jsonify({'error': 'Параметр uuid отсутствует в запросе'}), 400

@app.route('/get_uuid', methods=['GET'])
def get_uuid():
    return jsonify({'var_uuid': random.randint(10000, 99999)})

@app.route('/all_uuids', methods=['GET'])
def all_uuids():
    # Возвращаем все сохраненные UUID
    return jsonify({'uuids': list(uuid_data.values())})

if __name__ == '__main__':
    app.run(host="192.168.43.23", port=5000)
