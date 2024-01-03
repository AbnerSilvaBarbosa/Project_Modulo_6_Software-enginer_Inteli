import {describe, it, expect} from "vitest"
import {servicegetRanking} from './service.js'

describe("Ranking",()=>{
    it("should return ranking users !", async ()=>{
        const ranking = await servicegetRanking.exec(1)
        expect(ranking).toEqual(ranking)
    })
})

