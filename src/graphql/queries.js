/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    test {
      id
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      status
      tags
      comment
    }
    subjectId
    description
    host {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
    }
    createTime
    password
    users {
      items {
        id
        name
      }
      nextToken
    }
    currentRecord {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
    }
    comment
  }
}
`;
export const listRooms = `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      comment
    }
    nextToken
  }
}
`;
export const getJeUser = `query GetJeUser($id: ID!) {
  getJEUser(id: $id) {
    id
    name
    room {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      comment
    }
    team {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
    test {
      id
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      status
      tags
      comment
    }
    hostTest {
      id
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      status
      tags
      comment
    }
  }
}
`;
export const listJeUsers = `query ListJeUsers(
  $filter: ModelJEUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listJEUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
    }
    nextToken
  }
}
`;
export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    name
    description
    users {
      items {
        id
        name
      }
      nextToken
    }
    questionSet {
      items {
        id
        name
        description
        tags
      }
      nextToken
    }
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: ModelTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTest = `query GetTest($id: ID!) {
  getTest(id: $id) {
    id
    room {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      comment
    }
    team {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
    subjectId
    users {
      items {
        id
        name
      }
      nextToken
    }
    host {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
    }
    description
    timeBegin
    timeEnd
    records {
      items {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      nextToken
    }
    status
    tags
    comment
  }
}
`;
export const listTests = `query ListTests(
  $filter: ModelTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      status
      tags
      comment
    }
    nextToken
  }
}
`;
export const getRecord = `query GetRecord($id: ID!) {
  getRecord(id: $id) {
    id
    subjectId
    syncCode
    interviewer {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
    }
    timeBegin
    timeEnd
    status
    comment {
      items {
        author
        time
        content
      }
      nextToken
    }
    history {
      items {
        id
        time
        code
      }
      nextToken
    }
    ques {
      type
      name
      content
      test
    }
    question {
      id
      type
      name
      content
      test
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
    test {
      id
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      status
      tags
      comment
    }
    room {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      comment
    }
  }
}
`;
export const listRecords = `query ListRecords(
  $filter: ModelRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    author
    time
    content
    record {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      author
      time
      content
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
    nextToken
  }
}
`;
export const getHistory = `query GetHistory($id: ID!) {
  getHistory(id: $id) {
    id
    time
    code
    record {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
    }
    snapComments {
      items {
        id
        time
        author
        content
      }
      nextToken
    }
  }
}
`;
export const listHistorys = `query ListHistorys(
  $filter: ModelHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      time
      code
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      snapComments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSnapComment = `query GetSnapComment($id: ID!) {
  getSnapComment(id: $id) {
    id
    time
    author
    content
    history {
      id
      time
      code
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      snapComments {
        nextToken
      }
    }
  }
}
`;
export const listSnapComments = `query ListSnapComments(
  $filter: ModelSnapCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listSnapComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      time
      author
      content
      history {
        id
        time
        code
      }
    }
    nextToken
  }
}
`;
export const getQuestionSnapshot = `query GetQuestionSnapshot($id: ID!) {
  getQuestionSnapshot(id: $id) {
    id
    type
    name
    content
    test
    record {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
        comment
      }
      room {
        id
        subjectId
        description
        createTime
        password
        comment
      }
    }
  }
}
`;
export const listQuestionSnapshots = `query ListQuestionSnapshots(
  $filter: ModelQuestionSnapshotFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionSnapshots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      name
      content
      test
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
    nextToken
  }
}
`;
export const getQuestionSet = `query GetQuestionSet($id: ID!) {
  getQuestionSet(id: $id) {
    id
    team {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
    questions {
      items {
        id
        type
        name
        content
        test
        tags
      }
      nextToken
    }
    name
    description
    tags
  }
}
`;
export const listQuestionSets = `query ListQuestionSets(
  $filter: ModelQuestionSetFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      team {
        id
        name
        description
      }
      questions {
        nextToken
      }
      name
      description
      tags
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    type
    questionSet {
      id
      team {
        id
        name
        description
      }
      questions {
        nextToken
      }
      name
      description
      tags
    }
    name
    content
    test
    tags
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      questionSet {
        id
        name
        description
        tags
      }
      name
      content
      test
      tags
    }
    nextToken
  }
}
`;
