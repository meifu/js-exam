/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = `mutation CreateRoom(
  $input: CreateRoomInput!
  $condition: ModelRoomConditionInput
) {
  createRoom(input: $input, condition: $condition) {
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
export const updateRoom = `mutation UpdateRoom(
  $input: UpdateRoomInput!
  $condition: ModelRoomConditionInput
) {
  updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = `mutation DeleteRoom(
  $input: DeleteRoomInput!
  $condition: ModelRoomConditionInput
) {
  deleteRoom(input: $input, condition: $condition) {
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
export const createJeUser = `mutation CreateJeUser(
  $input: CreateJEUserInput!
  $condition: ModelJEUserConditionInput
) {
  createJEUser(input: $input, condition: $condition) {
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
export const updateJeUser = `mutation UpdateJeUser(
  $input: UpdateJEUserInput!
  $condition: ModelJEUserConditionInput
) {
  updateJEUser(input: $input, condition: $condition) {
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
export const deleteJeUser = `mutation DeleteJeUser(
  $input: DeleteJEUserInput!
  $condition: ModelJEUserConditionInput
) {
  deleteJEUser(input: $input, condition: $condition) {
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
export const createTeam = `mutation CreateTeam(
  $input: CreateTeamInput!
  $condition: ModelTeamConditionInput
) {
  createTeam(input: $input, condition: $condition) {
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
export const updateTeam = `mutation UpdateTeam(
  $input: UpdateTeamInput!
  $condition: ModelTeamConditionInput
) {
  updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = `mutation DeleteTeam(
  $input: DeleteTeamInput!
  $condition: ModelTeamConditionInput
) {
  deleteTeam(input: $input, condition: $condition) {
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
export const createTest = `mutation CreateTest(
  $input: CreateTestInput!
  $condition: ModelTestConditionInput
) {
  createTest(input: $input, condition: $condition) {
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
export const updateTest = `mutation UpdateTest(
  $input: UpdateTestInput!
  $condition: ModelTestConditionInput
) {
  updateTest(input: $input, condition: $condition) {
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
export const deleteTest = `mutation DeleteTest(
  $input: DeleteTestInput!
  $condition: ModelTestConditionInput
) {
  deleteTest(input: $input, condition: $condition) {
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
export const createRecord = `mutation CreateRecord(
  $input: CreateRecordInput!
  $condition: ModelRecordConditionInput
) {
  createRecord(input: $input, condition: $condition) {
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
export const updateRecord = `mutation UpdateRecord(
  $input: UpdateRecordInput!
  $condition: ModelRecordConditionInput
) {
  updateRecord(input: $input, condition: $condition) {
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
export const deleteRecord = `mutation DeleteRecord(
  $input: DeleteRecordInput!
  $condition: ModelRecordConditionInput
) {
  deleteRecord(input: $input, condition: $condition) {
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
export const createHistory = `mutation CreateHistory(
  $input: CreateHistoryInput!
  $condition: ModelHistoryConditionInput
) {
  createHistory(input: $input, condition: $condition) {
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
export const updateHistory = `mutation UpdateHistory(
  $input: UpdateHistoryInput!
  $condition: ModelHistoryConditionInput
) {
  updateHistory(input: $input, condition: $condition) {
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
export const deleteHistory = `mutation DeleteHistory(
  $input: DeleteHistoryInput!
  $condition: ModelHistoryConditionInput
) {
  deleteHistory(input: $input, condition: $condition) {
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
export const createSnapComment = `mutation CreateSnapComment(
  $input: CreateSnapCommentInput!
  $condition: ModelSnapCommentConditionInput
) {
  createSnapComment(input: $input, condition: $condition) {
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
export const updateSnapComment = `mutation UpdateSnapComment(
  $input: UpdateSnapCommentInput!
  $condition: ModelSnapCommentConditionInput
) {
  updateSnapComment(input: $input, condition: $condition) {
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
export const deleteSnapComment = `mutation DeleteSnapComment(
  $input: DeleteSnapCommentInput!
  $condition: ModelSnapCommentConditionInput
) {
  deleteSnapComment(input: $input, condition: $condition) {
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
export const createQuestionSnapshot = `mutation CreateQuestionSnapshot(
  $input: CreateQuestionSnapshotInput!
  $condition: ModelQuestionSnapshotConditionInput
) {
  createQuestionSnapshot(input: $input, condition: $condition) {
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
export const updateQuestionSnapshot = `mutation UpdateQuestionSnapshot(
  $input: UpdateQuestionSnapshotInput!
  $condition: ModelQuestionSnapshotConditionInput
) {
  updateQuestionSnapshot(input: $input, condition: $condition) {
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
export const deleteQuestionSnapshot = `mutation DeleteQuestionSnapshot(
  $input: DeleteQuestionSnapshotInput!
  $condition: ModelQuestionSnapshotConditionInput
) {
  deleteQuestionSnapshot(input: $input, condition: $condition) {
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
export const createQuestionSet = `mutation CreateQuestionSet(
  $input: CreateQuestionSetInput!
  $condition: ModelQuestionSetConditionInput
) {
  createQuestionSet(input: $input, condition: $condition) {
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
export const updateQuestionSet = `mutation UpdateQuestionSet(
  $input: UpdateQuestionSetInput!
  $condition: ModelQuestionSetConditionInput
) {
  updateQuestionSet(input: $input, condition: $condition) {
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
export const deleteQuestionSet = `mutation DeleteQuestionSet(
  $input: DeleteQuestionSetInput!
  $condition: ModelQuestionSetConditionInput
) {
  deleteQuestionSet(input: $input, condition: $condition) {
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
export const createQuestion = `mutation CreateQuestion(
  $input: CreateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = `mutation UpdateQuestion(
  $input: UpdateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = `mutation DeleteQuestion(
  $input: DeleteQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  deleteQuestion(input: $input, condition: $condition) {
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
