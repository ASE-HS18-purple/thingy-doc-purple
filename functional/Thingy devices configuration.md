## Thingy devices configuration
**Overview**

Basically the part of configuring the thingy devices is automated as much as possible(considering the 
circumstance). However, there are a few constraints at this point because our system does not communicate directly
with thingy devices, but instead the device should be first setup via 
web bluetooth proxy. After the thingy device is discovered using web bluetooth proxy 
the device id of thingy is shown and the configuration in our system should be done 
by using that device id.

**Details**

After the device is discovered by web bluetooth proxy, the user should copy the 
id of thingy device. Using the copied id, when setting up the devices, the user provides
the location of the device and the device id. In this way we assign a location to the device and 
as soon as the user configures the device, the system is able to capture the following data from the sensor:
 - Temperature
 - Pressure
 - Humidity
 - Air quality
 
The user can configure as many as necessary sensors and typically this is a setup done only once - 
when the user starts using the system.

**NOTE**

When assigning the location, the user should be careful when setting up the location. 
In case the user provides a location already configured, the device id related 
to the provided location will be updated. However, this is a corner case and 
considering the nature of the location the chances to occur are very low.

In case the device id of any of the thingy devices has changed (typically in system restart)
the user is responsible for updating the device id of the respective configuration.
Also, the user can delete the configuration. 


