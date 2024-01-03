import { prisma } from "../../../database/connection.js";

class ServiceputUpDown {
    async increment(idPost) {
        try {
            const response = await prisma.post.update({
                where: {
                    idPost: idPost
                },
                data: {
                    qntUp: { increment: 1 }
                }
    
            });
            return response;
            
        } catch (error) {
            return error;
        }

    }
    async decrementing(idPost) {
        try {
            const response = await prisma.post.update({
                where: {
                    idPost: idPost
                },
                data: {
                    qntUp: { increment: -1 }
                }
            })
            
        } catch (error) {
            return error;
        }
    }
    async increment(idPost) {
        try {
            const response = await prisma.post.update({
                where: {
                    idPost: idPost
                },
                data: {
                    qntUp: { increment: 1 }
                }
    
            });
            return response;
            
        } catch (error) {
            return error;
        }
    }

    async decrementing(idPost) {
        try {
            const response = await prisma.post.update({
                where: {
                    idPost: idPost
                },
                data: {
                    qntUp: { increment: -1 }
                }
            })
            
        } catch (error) {
            return error;
        }
    }


}



export const ServiceputUpDown = new ServiceputUpDown();