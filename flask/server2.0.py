from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sqlite.db'
db = SQLAlchemy(app)

class UUIDEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    uuid = db.Column(db.String(36), unique=True, nullable=False)
    name = db.Column(db.String(50), default='')
    surname = db.Column(db.String(50), default='')
    group = db.Column(db.String(20), default='')

@app.route('/save_uuid', methods=['POST'])
def save_uuid():
    if 'uuid' in request.form:
        uuid = request.form['uid']
        # Проверяем, существует ли запись с данным UUID в БД
        existing_entry = UUIDEntry.query.filter_by(uuid=uuid).first()
        
        if existing_entry:
            return jsonify({'msg': 'UUID уже существует в БД'})

        # Если запись с данным UUID не существует, создаем новую запись
        new_entry = UUIDEntry(uuid=uuid)
        db.session.add(new_entry)
        db.session.commit()
        
        return jsonify({'msg': 'UUID успешно сохранен'})
    else:
        return jsonify({'error': 'Параметр uuid отсутствует в запросе'}), 400

@app.route('/get_uuid', methods=['GET'])
def get_uuid():
    if 'uuid' in request.args:
        uuid = request.args['uid']
        entry = UUIDEntry.query.filter_by(uuid=uuid).first()
        
        if entry:
            return jsonify({
                'name': entry.name,
                'surname': entry.surname,
                'group': entry.group
            })
        else:
            return jsonify({'error': 'UUID не найден в БД'}), 404
    else:
        return jsonify({'error': 'Параметр uuid отсутствует в запросе'}), 400

if __name__ == '__main__':
    app.run(host="192.168.192.51", port=5000)
