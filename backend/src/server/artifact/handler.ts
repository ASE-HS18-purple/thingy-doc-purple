import {Artifact} from './model';

const createNewArtifact = async (artifact: any) => {
    return await Artifact.create(artifact);
};

const findAllArtifacts = async () => {
    return await Artifact.find();
}

export {createNewArtifact, findAllArtifacts};