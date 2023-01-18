import qrcode
import json

data = []


def load_json():
    global data
    with open("guests.json", "r") as json_file:
        # Carga el contenido del archivo en una variable
        data = json.load(json_file)


def gen_QR():
  url_base = 'https://invitation-oyup.onrender.com/{}'

  for info in data:
    qr = qrcode.QRCode(version=1, box_size=10, border=5)

    qr.add_data(url_base.format(info["id"]))
    qr.make(fit=True)

    img = qr.make_image(fill='black', back_color='white')
    img.save(f'qrs/{info["id"]}.png')


load_json()
gen_QR()
