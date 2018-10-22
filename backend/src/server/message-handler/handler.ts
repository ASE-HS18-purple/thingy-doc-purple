import {mqttBrokerClient} from '../mqtt-broker-connection/index';
import {storeTemperature} from '../enviromental-data/temperature/index';
import {storePressure} from '../enviromental-data/pressure/index';
import {storeHumidity} from '../enviromental-data/humidity';
import {storeAirQuality} from '../enviromental-data/air-quality';

const temperature = 'Qyg1B7_IFpQOA2itdwxMPA/ef680200-9b35-4933-9b10-52ffa9740042/ef680201-9b35-4933-9b10-52ffa9740042';
const pressure = 'Qyg1B7_IFpQOA2itdwxMPA/ef680200-9b35-4933-9b10-52ffa9740042/ef680202-9b35-4933-9b10-52ffa9740042';
const humidity = 'Qyg1B7_IFpQOA2itdwxMPA/ef680200-9b35-4933-9b10-52ffa9740042/ef680203-9b35-4933-9b10-52ffa9740042';
const airQuality = 'Qyg1B7_IFpQOA2itdwxMPA/ef680200-9b35-4933-9b10-52ffa9740042/ef680204-9b35-4933-9b10-52ffa9740042';

const subscribeToMqtt = (deviceUri?: string) => {
    const client = mqttBrokerClient();
    // TODO: Here you will get from the database the device URIs instead of the hardcoded ones above (in the startup of the system).
    // TODO: And this method will also be used to subscribe the devices configured via UI.
    client.subscribe(temperature);
    client.subscribe(pressure);
    client.subscribe(humidity);
    client.subscribe(airQuality);
    client.on('message', (topic, message) => {
        if (topic == temperature) {
            storeTemperature(message);
        }
        if (topic == pressure) {
            storePressure(message);
        }
        if (topic == humidity) {
            storeHumidity(message);
        }
        if (topic == airQuality) {
            storeAirQuality(message);
        }
    });
};

const handleMessages = () => {
    const client = mqttBrokerClient();
    client.on('message', (topic, message) => {
        if (topic == temperature) {
            storeTemperature(message);
        }
        if (topic == pressure) {
            storePressure(message);
        }
    });
};

export {subscribeToMqtt, handleMessages};
