import * as mongoose from 'mongoose';

const ArtifactSchema = new mongoose.Schema({
    title: String
});

const Artifact = mongoose.model("Artifact", ArtifactSchema);

export {Artifact};