export interface Interviews{
    id: number,
    recruiterId : number | null | undefined,
    submissionId: number | null | undefined,
    interviewTypeId : number | null | undefined,
    interviewRound: number | null | undefined,
    scheduledOn: Date | null | undefined,
    interviewerId: number | null | undefined,
    interviewFeedbackId: number | null | undefined,
}
        