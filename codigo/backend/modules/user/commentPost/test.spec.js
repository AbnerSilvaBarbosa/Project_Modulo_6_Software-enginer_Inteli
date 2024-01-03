import { describe, it, expect } from "vitest";
import { serviceCommentPost } from "./service.js";
import { prisma } from "../../../database/connection.js";

describe("Comment", () => {
    it("should return comment !", async () => {
        const request = await serviceCommentPost.exec({
            comment: "Teste",
            idUser: 1,
            idPost: 1,
        });

        expect(request).toEqual({
            idComment: request.idComment,
            comment: "Teste",
            idUser: 1,
            idPost: 1,
        });

        await prisma.comment.delete({
            where: {
                idComment: request.idComment,
            },
        });

    });
});