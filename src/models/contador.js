import conexion from "../db/atlas.js";
const db = await conexion();

export class ModelContador {

    /**
     ** funcion para simular el autoincrementable en el id de las colecciones
    */
    static async getNextSequenceValue(sequenceName) {
        const sequenceDocument = await db.collection("counters").findOneAndUpdate(
            { _id: sequenceName },
            { $inc: { sequence_value: 1 } },
            { returnOriginal: false }
        );
        return sequenceDocument.value.sequence_value;
    }
}