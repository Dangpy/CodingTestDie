//프로그래머스 레벨1

// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

//제한사항
// 3 ≤ number의 길이 ≤ 13
// -1,000 ≤ number의 각 원소 ≤ 1,000
// 서로 다른 학생의 정수 번호가 같을 수 있습니다.

function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++)
        if (number[i] + number[j] + number[k] == 0) answer++;
    }
  }
  return answer;
}

// i의 인덱스를 고정하고 j와 k를 각각 다음 인덱스로 만들어 세 개를 더했을 때 0이 나오는 값을 찾게 하였다.

// 다른 사람 풀이 중 탐났던 풀이
function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}

// 서로 다른 사람 3명을 필요로하므로
// 조합 활용 => 3명이 존재 => 그 합을 구하여 0이면 count++;
// combination 함수 사용
