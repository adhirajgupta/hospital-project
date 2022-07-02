from flask import Flask,request,jsonify
from mail_send import send_mail
from flask_cors import CORS


app = Flask(__name__)
# CORS(app)

@app.route('/send',methods=['POST'])
def sendMail():
    email3 = request.json
    print(email3)
    send_mail(email3["email"],email3["message"])
    return jsonify({
        "email":email3["email"],
        "message":email3["message"]
        # "email":email3.email
        # "email2":email2,
        # "email1":email1,
        # "email":email,
    })



if __name__ == "__main__":
  app.run(debug=True,)