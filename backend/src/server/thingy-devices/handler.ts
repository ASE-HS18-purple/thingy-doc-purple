import {Thingy} from './model';

export class ThingyDevicesHandler {

    constructor() {
    }

    public async configureNewThingDevice(thingyModel: any, username: string) {
        let result: any = null;
        const deviceId = thingyModel.deviceId;
        const location = thingyModel.location;
        const thingy = await this.findThingByUsernameAndLocation(username, location);
        if (!thingy) {
            // Create one.
            result = await Thingy.create(new Thingy({
                location: location,
                username: username,
                deviceId: deviceId,
            }));
        } else {
            // Simply update it.
            const id = (thingy as any)._id;
            await Thingy.updateOne({_id: id}, {
                location: location,
                username: username,
                deviceId: deviceId,
            });
            result = await Thingy.findOne({_id: id});
        }
        // here we should subscribe to events published by mqtt coming from this device.
        return result;
    }

    public async findAllThingyDevicesByUsername(username: string) {
        return await Thingy.find({
            username: username,
        });
    }

    private async findThingByUsernameAndLocation(username: string, location: string) {
        const thingy = await Thingy.findOne({
            username: username,
            location: location,
        });
        return thingy;
    }

}
