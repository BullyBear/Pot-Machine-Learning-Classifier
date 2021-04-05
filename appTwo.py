# from flask import Flask, request, jsonify, make_response
# from flask_restplus import Api, Resource, fields, apidoc
# from flask_cors import CORS
# import numpy as np
# import sys
# import traceback
# import joblib

# # taco=flask.Flask(__name__)
# taco = Flask(__name__)

# # def taco():
# #     nacho = Flask(__name__)
# #     return nacho

# # noodle = taco

# # app = Api(noodle(),
# app = Api(app = taco, 
#       version = "1.0", 
#       title = "Pot Recommender", 
#       description = "Predict the type of pot you'd like"
#       # default=None
#       # doc=False
#       )

# # blueprint = Blueprint('api', __name__, url_prefix='/api')
# # api = Api(blueprint, doc='/doc/')

# # app.register_blueprint(api)
# # app.register_blueprint(blueprint)

# # app.config.SWAGGER_VALIDATOR_URL = 'http://127.0.0.1:5000/ml'


# # name_space = app.namespace('http://127.0.0.1:5000/machine_learning_leafly', description='Prediction APIs')
# name_space = app.namespace('machine_learning_leafly', description='Prediction APIs')



# model = app.model('Prediction params', 
#               {'Happy': fields.Integer(required = False, 
#                                            description="happy", 
#                                            help="happy can be blank"),
#               'Euphoric': fields.Integer(required = False, 
#                                            description="euphoric", 
#                                            help="euphoric can be blank"),
#               'Uplifted': fields.Integer(required = False, 
#                                            description="uplifted", 
#                                            help="uplifted can be blank"),
#               'Relaxed': fields.Integer(required = False, 
#                                            description="relaxed", 
#                                            help="relaxed can be blank"),
#               'Creative': fields.Integer(required = False, 
#                                            description="creative", 
#                                            help="creative can be blank"),
#               'Energetic': fields.Integer(required = False, 
#                                            description="energetic", 
#                                            help="energetic can be blank"),

#               'Stress': fields.Integer(required = False, 
#                                            description="stress", 
#                                            help="stress can be blank"),
#               'Anxiety': fields.Integer(required = False, 
#                                            description="anxiety", 
#                                            help="anxiety can be blank"),
#               'Pain': fields.Integer(required = False, 
#                                            description="pain", 
#                                            help="pain can be blank"),
#               'Depression': fields.Integer(required = False, 
#                                            description="depression", 
#                                            help="depression can be blank"),
#               'Insomnia': fields.Integer(required = False, 
#                                            description="insomnia", 
#                                            help="insomnia can be blank"),
#               'Fatigue': fields.Integer(required = False, 
#                                            description="fatigue", 
#                                            help="fatigue can be blank")
#               })


# classifier = joblib.load('machine_learning_leafly/classifierMaster.joblib')

# @name_space.route('/ml')
# class MainClass(Resource):

#     def options(self):
#         response = make_response()
#         response.headers.add("Access-Control-Allow-Origin", "*")
#         response.headers.add('Access-Control-Allow-Headers', "*")
#         response.headers.add('Access-Control-Allow-Methods', "*")
#         return response

#     def get(self):
#         return jsonify({'Success': True})

#     @app.expect(model)      
#     def post(self):
#         try: 
#             formData = request.json
#             data = [val for val in formData.values()]
#             prediction = classifier.predict(np.array(data).reshape(1, -1))
#             print(prediction)
#             types = { 0: "Hybrid", 1: "Indica", 2: "Sativa"}
#             response = jsonify({
#                 "statusCode": 200,
#                 "status": "Prediction made",
#                 "result": "The predicted phenotype is: " + prediction[0]
#                 })
#             response.headers.add('Access-Control-Allow-Origin', '*')
#             return response
#         except Exception as error:
#             traceback.print_exc()
#             return jsonify({
#                 "statusCode": 500,
#                 "status": "Could not make prediction",
#                 "error": str(error)
#             })