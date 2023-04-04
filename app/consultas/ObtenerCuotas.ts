import { Request } from "mssql";
import { Cuota } from "../types/serviceDoc";

export const ObtenerCuotas = (sql: Request, numero_documento: string): Promise<Cuota[]> => {
    // console.log(numero_documento);
    const ObtnerProductosQuery = `SELECT *
    FROM VENTACUOTAS_RCI as VC WHERE VC.VentaId = '${numero_documento}' `;
    return new Promise((resolve, reject) => {

        sql.query(ObtnerProductosQuery, (err: any, result: any) => {
            if (err) {
                console.error('Error al ejecutar la consulta productos: ', err);
                reject(err);
            }

            const productos = result?.recordset;
            resolve(productos);
        });

    })

}