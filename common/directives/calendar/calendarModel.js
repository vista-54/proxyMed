/**
 * Created by Vista on 07.07.16.
 */

main.service('calendarModel', function (userConst) {
    console.log('calendarModel');
    var daysInTheMonth = function (year, month) {
        return new Date(year, month, 0).getDate();
    };
    var getStartMonthDay = function (month, year) {
        return new Date(year, month, 1).getDay();
    };

    var CurrMonth2 = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var currDay = new Date().getDate();
    var currDayOfWeek = new Date().getDay();

    var createMonth = function (days, month, year) {
        var startMonth = getStartMonthDay(month - 1, year);
        var lastMonthDays = daysInTheMonth(year, month - 1) - (startMonth - 1);
        var nextMonthCount = 0;
        var month = [];
        var count = 0;
        for (var j = 1; j < startMonth; j++) {
            lastMonthDays++;
            month.push({day: lastMonthDays, last: true});

        }
        for (var i = 0; i < days; i++) {
            count++;
            month.push({day: count, last: false});
        }
        if (month.length <= 35) {
            var kMax = 35 - month.length;
        }
        else {
            var kMax = 42 - month.length;
        }

        for (var k = 0; k < kMax; k++) {
            nextMonthCount++;
            month.push({day: nextMonthCount, last: true});
        }
        return month;
    };

    var model = {
            month: {
                days: createMonth(daysInTheMonth(year, CurrMonth2), CurrMonth2, year),
                currMonth: {
                    name: userConst.month[CurrMonth2 - 1],
                    number: CurrMonth2
                },
                currYear: year,
                currDay: currDay,
                lastMonth: CurrMonth2 - 1,
                nextMonth: CurrMonth2 + 1,
                shortDaysOfWeek: userConst.DaysOfWeekShort,
                startMonth: getStartMonthDay(CurrMonth2 - 1, year)

            },
            getMonth: function (m, y) {
                return {
                    days: createMonth(daysInTheMonth(y, m), m, y),
                    currMonth: {
                        name: userConst.month[m - 1],
                        number: m
                    },
                    currYear: y,
                    lastMonth: m - 1,
                    nextMonth: m + 1,
                    startMonth: getStartMonthDay(m - 1, y)
                }
            },
            selectedSheduleDay: currDay,
            selectedSheduleMonth:CurrMonth2
        }
        ;
    return model;
})