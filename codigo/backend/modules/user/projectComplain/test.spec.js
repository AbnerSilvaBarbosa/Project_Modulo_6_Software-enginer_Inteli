import { describe, it, expect, isFirstRun } from "vitest";
import { serviceProjectComplain } from "./service.js";

describe("ProjectComplain", () => {
    it("should post a project complain !", async () => {
        const request = await serviceProjectComplain.exec({
            complaintReason: "Teste",
            feedback: "Teste",
            idProject: 1,
        });

        console.log(request);

        expect(request).toEqual({
            idProjectComplaint: request.idProjectComplaint,
            complaintReason: "Teste",
            feedback: "Teste",
            idProject: 1,
        });

    })
})