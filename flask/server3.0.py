from flask import Flask, request, jsonify

app = Flask(__name__)
uids = ('e3c65a11')

@app.route('/check_uuid', methods=['POST'])
def check_uuid():
    if 'uid' in request.json:
        uuid = request.json['uid']

        print(f"Проверяем карточку: {uuid}")

        # Проверяем, существует ли запись с данным UUID в списке
        if uuid in uids:
            print("Студент найден")
            return jsonify({'msg': 'WELCOME'})
        elif uuid not in uids:
            print("Студент не найден")
            return jsonify({'msg':'GOODBYE'})
    else:
        return jsonify({'error': 'uid not found'}), 400

@app.route('/get_uuid', methods=['GET'])
def get_uuid():
    # Возвращаем список всех UUID из списка
    return jsonify({'uuids': list(uids)})

if __name__ == '__main__':
    app.run(host="192.168.192.51", port=5000)
