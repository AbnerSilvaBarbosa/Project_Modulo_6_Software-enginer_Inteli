import { describe, it, expect } from "vitest";
import { servicePostComplain } from "./service.js";

describe("PostComplain", () => {
    it("should post a project complain !", async () => {
        const request = await servicePostComplain.exec({
            complaintReason: "Teste",
            feedback: "Teste",
            idPost: 1,
        });

        console.log(request);

        expect(request).toEqual({
            idPostComplaint: request.idPostComplaint,
            complaintReason: "Teste",
            feedback: "Teste",
            idPost: 1,
        });

    })
})