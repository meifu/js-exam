/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateJeUserByJeUserId = `subscription OnUpdateJeUserByJeUserId($id: String) {
  onUpdateJEUserByJEUserId(id: $id) {
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
export const onUpdateTeamByTeamId = `subscription OnUpdateTeamByTeamId($id: String) {
  onUpdateTeamByTeamId(id: $id) {
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
export const onUpdateTestByTestId = `subscription OnUpdateTestByTestId($id: String) {
  onUpdateTestByTestId(id: $id) {
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
export const onUpdateRoomByRoomId = `subscription OnUpdateRoomByRoomId($id: String) {
  onUpdateRoomByRoomId(id: $id) {
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
export const onUpdateRecordByRecordId = `subscription OnUpdateRecordByRecordId($id: String) {
  onUpdateRecordByRecordId(id: $id) {
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
export const onCreateRoom = `subscription OnCreateRoom {
  onCreateRoom {
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
export const onUpdateRoom = `subscription OnUpdateRoom {
  onUpdateRoom {
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
export const onDeleteRoom = `subscription OnDeleteRoom {
  onDeleteRoom {
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
export const onCreateJeUser = `subscription OnCreateJeUser {
  onCreateJEUser {
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
export const onUpdateJeUser = `subscription OnUpdateJeUser {
  onUpdateJEUser {
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
export const onDeleteJeUser = `subscription OnDeleteJeUser {
  onDeleteJEUser {
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
export const onCreateTeam = `subscription OnCreateTeam {
  onCreateTeam {
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
export const onUpdateTeam = `subscription OnUpdateTeam {
  onUpdateTeam {
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
export const onDeleteTeam = `subscription OnDeleteTeam {
  onDeleteTeam {
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
export const onCreateTest = `subscription OnCreateTest {
  onCreateTest {
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
export const onUpdateTest = `subscription OnUpdateTest {
  onUpdateTest {
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
export const onDeleteTest = `subscription OnDeleteTest {
  onDeleteTest {
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
export const onCreateRecord = `subscription OnCreateRecord {
  onCreateRecord {
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
export const onUpdateRecord = `subscription OnUpdateRecord {
  onUpdateRecord {
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
export const onDeleteRecord = `subscription OnDeleteRecord {
  onDeleteRecord {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateHistory = `subscription OnCreateHistory {
  onCreateHistory {
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
export const onUpdateHistory = `subscription OnUpdateHistory {
  onUpdateHistory {
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
export const onDeleteHistory = `subscription OnDeleteHistory {
  onDeleteHistory {
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
export const onCreateSnapComment = `subscription OnCreateSnapComment {
  onCreateSnapComment {
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
export const onUpdateSnapComment = `subscription OnUpdateSnapComment {
  onUpdateSnapComment {
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
export const onDeleteSnapComment = `subscription OnDeleteSnapComment {
  onDeleteSnapComment {
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
export const onCreateQuestionSnapshot = `subscription OnCreateQuestionSnapshot {
  onCreateQuestionSnapshot {
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
export const onUpdateQuestionSnapshot = `subscription OnUpdateQuestionSnapshot {
  onUpdateQuestionSnapshot {
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
export const onDeleteQuestionSnapshot = `subscription OnDeleteQuestionSnapshot {
  onDeleteQuestionSnapshot {
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
export const onCreateQuestionSet = `subscription OnCreateQuestionSet {
  onCreateQuestionSet {
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
export const onUpdateQuestionSet = `subscription OnUpdateQuestionSet {
  onUpdateQuestionSet {
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
export const onDeleteQuestionSet = `subscription OnDeleteQuestionSet {
  onDeleteQuestionSet {
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
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
