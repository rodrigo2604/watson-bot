var express = require('express'),
    controller = require('./controller'),
    router = express.Router();

/**
 * @api {get} /api/test/:userId Permite obtener las pruebas de esfuerzo realizadas por el usuario cuyo userId ha sido pasado como parametro
 * @apiVersion 1.0.0
 * @apiName GetTests
 * @apiGroup EffortTests
 * 
 * @apiError (Error 400) {Object} Bad-Request No se pueden guardar los datos
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 400 Bad-Request
 * {
 *      "message" : "",
 *      "name" : ""
 * }
 * */

router.route('/test/:userId')
    .get(controller.get);

/**
 * @api {post} /api/test/ Al terminar una prueba de esfuerzo, esta siempre se guardará, el método post se encarga de ello. 
 * @apiVersion 1.0.0
 * @apiName PostTests
 * @apiGroup EffortTests
 * 
 * @apiParam {Number} userId Identificador del usuario
 * @apiParam {Date} date Fecha que representa la finalización de la prueba
 * @apiParam {Schema} weatherModel Formato JSON que representa los valores más relevantes del tiempo que hacia durante la prueba
 * @apiParam {Schema} path Conforman el camino que realizó el usuario durante toda la prueba de esfuerzo en formato de geolocalización
 * @apiParam {Schema} pathIcons Conforman una serie de posiciones que representan el lugar donde terminó la prueba de esfuerzo
 * @apiParam {Schema} protocol Formato JSON que representa las características del protocolo sobre el cual se realizó la prueba
 * @apiParam {Schema} duration Formato JSON que describe cronómetro, el cual representará el tiempo que duró la prueba
 * @apiParam {Schema} steps Conforman una serie de métricas más relevantes para cada una de las etapas terminadas.  
 * 
 * @apiParamExample {json} Request-Example:
 * {
 *   "userId" : 213,
 *   "weather": {
 *       "humidity": 26,
 *       "pressure": 1020,
 *       "temperature": 33,
 *       "country": "ES",
 *       "description": "clear sky",
 *       "place": "La Alameda de Osuna",
 *       "wind": {
 *           "speed": 1.5,
 *           "deg": 150
 *       },
 *       "coord": {
 *           "lon": -3.58,
 *           "lat": 40.45
 *       }
 *   },
 *   "protocol": {
 *       "title": "Test de Bruce",
 *       "description": "Este protocolo es un test orientado al estudio de personas con capacidad física promedio normal. Consiste, en incrementos cada tres minutos en la velocidad e inclinación.",
 *       "steps": 5,
 *       "duration": 15
 *   },
 *   "duration": {
 *       "hours": 0,
 *       "minutes": 0,
 *       "seconds": 3.001,
 *       "millis": 3001
 *   },
 *   "steps": [
 *       {
 *           "HR" : 100,
 *           "calories" : 120,
 *           "distance" : 4,
 *           "meanVelocity": 4.2,
 *           "steps" : 300
 *       }
 *   ],
 *   "pathIcons": [
 *       {
 *           "latitude": 40.4468077282369,
 *           "longitude": -3.58256103470922
 *       }
 *   ],
 *   "path": [
 *       {
 *           "latitude": 40.4468077282369,
 *           "longitude": -3.58256103470922
 *       }
 *   ]
 * 
 * }
 * 
 * @apiError (Error 400) {Object} Bad-Request No se pueden guardar los datos
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 400 Bad-Request
 *  {
 *      "message": ""
 *      "name": "" 
 *  }
 * 
 */

router.route('/test')
    .post(controller.post);

module.exports = router;