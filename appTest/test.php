<?php

  function formatDate(DateTime $dateTime, $format = 3, $locale = 3 ): string{

    $fmt = new IntlDateFormatter('it_IT', 3, 3, 'Europe/Rome', 1, 'dd/MM/YYYY');
    return $fmt->format($dateTime);

  }
  $localZone = new DateTimeZone('Europe/Rome');
  $date1 = new Datetime('now', $localZone);
(formatDate($date1));
