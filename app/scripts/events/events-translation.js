(function () {
    'use strict'
    angular.module('events')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'events': 'Events',
                'activity-events': 'Activity and Events',
                'visited-events': 'Visited Events',
                'planned-events': 'Planned Events',
                'create-event': 'Create an Event',
                'network-events': 'Network Events',
                'public-events': 'Public Events',
                'new-event': 'New Event',
                'friends': 'Friends',
                'SvetEventsCalendar': 'Svet Events Calendar 2015',
                'upcoming-svet-event': 'Upcoming Svet Event',
                'event-ad-title': 'Family Public Event',
                'event-ad-body': 'A very special and fun SVET Family Event at Kohl Children\'s Museum on May 5.',
                'families-event': 'Families are goings',
                'join-tip': 'Click to register for visiting this event',
                'unlink-tip': 'Click to un-register from visiting this event',
                'join': 'Register',
                'unlink': 'Un-register',
                'accept': 'Accept',
                'reject': 'Reject',
                'accepted': 'Accepted',
                'rejected': 'Rejected'
            });
            $translateProvider.translations('ru', {
                'events': 'Мероприятия',
                'activity-events': 'События и Мероприятия',
                'visited-events': ' Посещенные Мероприятия',
                'planned-events': 'Запланированные  Мероприятия',
                'create-event': 'Создать Мероприятие',
                'new-event': 'Новое Мероприятие',
                'network-events': 'Бизнес Мероприятия',
                'public-events': 'Открытые Мероприятия',
                'friends': 'Друзья',
                'SvetEventsCalendar': 'Календарь Событий \'15',
                'upcoming-svet-event': 'Свет Приглашает',
                'event-ad-title': 'Семейное Мероприятие.',
                'event-ad-body': '5 Мая Свет пгиглашает на увлекательное мероприятие для всей семьи в Детском Музее Kohl.',
                'families-event': 'Семей Придут',
                'join-tip': 'Кликните чтобы зарегистрироваться',
                'unlink-tip': 'Отменить регистрацию на посещение',
                'join': 'Пойду',
                'unlink': 'Отменить',
                'accept': 'Принять',
                'reject': 'Отклонить',
                'accepted': 'Принят',
                'rejected': 'Отклонен'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
