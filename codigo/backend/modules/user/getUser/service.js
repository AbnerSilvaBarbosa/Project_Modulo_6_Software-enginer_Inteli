import { prisma } from "../../../database/connection.js";

class ServiceGetUserById {
    async exec(id) {

        try {
            const response = await prisma.user.findUnique({
                where:{
                    idUser: Number(id)
                },
            })

            return response;

        } catch (error) {
            throw new Error("Could not find user");
        }

    }
}

export const serviceGetUserById = new ServiceGetUserById();