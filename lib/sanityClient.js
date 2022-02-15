import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'trbtwgsb',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
    'skxswnOOS88CG50KSuyRUIVnJyRlO6403MPuplOt6dufBgLcnWEki9cZnisRarUvQLwmUgiCGborJX1zmdNw4x0VW1PII1FKn6KFwu9UkW4zHVWJ2yfQ3bIBhf7rMEzCQd1o0s2Xo4JXjZBg6dCPBvli7l5MAcOVwklFRZ2RWrMCs929Kchs',
    useCdn: false,
})