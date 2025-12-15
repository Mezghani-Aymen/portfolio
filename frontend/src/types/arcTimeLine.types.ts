export interface IArcTimelineItem {
    time: string
    steps: Array<{
        icon: React.ElementType;
        content: string
    }>
}